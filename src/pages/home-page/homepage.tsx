import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export const HomePage = () => {
  return (
    <div data-testid="home-page">
      <h1>Welcome to Our App</h1>
      <Card>
        <h2>Get Started</h2>
        <p>Learn more about our features</p>
        <Button>Explore</Button>
      </Card>
    </div>
  );
};
