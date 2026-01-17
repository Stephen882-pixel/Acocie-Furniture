import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock orders data - in a real app, this would come from an API
  const [orders] = useState([
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 1199.99,
      items: [
        { id: 1, name: "Executive Oak Desk", quantity: 2, price: 599.99 },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "In Transit",
      total: 399.99,
      items: [
        { id: 2, name: "Ergonomic Pro Chair", quantity: 1, price: 399.99 },
      ],
    },
    {
      id: "ORD-2023-156",
      date: "2023-12-20",
      status: "Delivered",
      total: 1299.99,
      items: [{ id: 3, name: "Modern L-Sofa", quantity: 1, price: 1299.99 }],
    },
  ]);

  const login = (email,password) => {
    const mockUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: email,
      phone: '(555) 123-4567',
      address: '123 Main Street',
      city: 'New York',
      zipCode: '10001',
      memberSince: '2023-06-15'
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (userData) => {
    const newUser = {
        id:Date.now(),
        ...userData,
        memberSince:new Date().toISOString().split('T')[0]
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateProfile = (updatedData) => {
    setUser({...user,...updatedData});
    return true;
  };

  const value = {
    user,
    isAuthenticated,
    orders,
    login,
    register,
    logout,
    updateProfile
  };
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


