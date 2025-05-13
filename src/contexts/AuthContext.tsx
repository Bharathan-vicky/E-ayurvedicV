
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // In a real app, this would make an API call to validate credentials
      // For demo purposes, we'll simulate authentication
      if (email && password) {
        const user = { id: "user-1", email };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        toast({
          title: "Success!",
          description: "You have successfully signed in.",
        });
        return;
      }
      throw new Error("Invalid credentials");
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message || "Please check your credentials and try again",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      // In a real app, this would make an API call to create a user
      // For demo purposes, we'll simulate user creation
      if (email && password) {
        const user = { id: "user-" + Date.now(), email, name };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        toast({
          title: "Account created!",
          description: "Your account has been created successfully.",
        });
        return;
      }
      throw new Error("Please provide all required information");
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message || "Please check your information and try again",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
