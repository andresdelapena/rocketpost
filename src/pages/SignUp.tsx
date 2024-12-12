import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - Regardss Email Assistant</title>
        <meta name="description" content="Create your Regardss account and start writing better emails with AI assistance." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="container py-8">
        <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Create Account</Button>
        </form>
      </main>
    </>
  );
}
