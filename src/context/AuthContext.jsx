import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('welliesta_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [lastLoginTime, setLastLoginTime] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('welliesta_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('welliesta_user');
    }
  }, [user]);

  const login = ({ emailOrPhone, password }) => {
    // Standard mock authentication
    const memberName = emailOrPhone.includes('@') 
      ? emailOrPhone.split('@')[0].replace(/[^a-zA-Z]/g, '') 
      : 'Athlete';
    const capitalizedName = memberName ? memberName.charAt(0).toUpperCase() + memberName.slice(1) : 'Member';

    const authenticatedUser = {
      name: capitalizedName || 'Welliesta Member',
      email: emailOrPhone.includes('@') ? emailOrPhone : 'member@welliesta.com',
      phone: !emailOrPhone.includes('@') ? emailOrPhone : '+91 98230 45678',
      memberId: 'WF-' + Math.floor(100000 + Math.random() * 900000),
      goal: 'Strength & Hypertrophy',
      membershipPlan: 'Amravati All-Access Platinum',
      membershipStatus: 'Active',
      validUntil: 'Nov 2026',
      streakDays: 14,
      trainer: 'Coach Rahul (NASM)',
      avatarColor: '#F24E06',
    };

    setUser(authenticatedUser);
    setLastLoginTime(Date.now());
    return { success: true, user: authenticatedUser };
  };

  const signup = ({ name, email, phone, goal }) => {
    const newUser = {
      name: name || 'New Member',
      email: email || 'athlete@welliesta.com',
      phone: phone || '+91 96372 66663',
      memberId: 'WF-' + Math.floor(100000 + Math.random() * 900000),
      goal: goal || 'Weight Loss & Fat Burn',
      membershipPlan: 'Free Trial Pass Holder',
      membershipStatus: 'Active Pass',
      validUntil: 'Active (Trial Period)',
      streakDays: 1,
      trainer: 'Assigned on First Visit',
      avatarColor: '#F24E06',
    };

    setUser(newUser);
    setLastLoginTime(Date.now());
    return { success: true, user: newUser };
  };

  const demoLogin = () => {
    const demoUser = {
      name: 'Vijay Mundada',
      email: 'vijay.m@example.com',
      phone: '+91 98221 44556',
      memberId: 'WF-849201',
      goal: 'Hypertrophy & Strength Training',
      membershipPlan: 'Platinum Annual Membership',
      membershipStatus: 'Active Member',
      validUntil: 'March 2027',
      streakDays: 24,
      trainer: 'Coach Kunal (CSCS)',
      avatarColor: '#F24E06',
    };
    setUser(demoUser);
    setLastLoginTime(Date.now());
    return demoUser;
  };

  const logout = () => {
    setUser(null);
    setLastLoginTime(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, lastLoginTime, login, signup, logout, demoLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
