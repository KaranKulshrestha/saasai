"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

interface subsProps {
    isPro: boolean;
};

export const SubscriptionButton = ({isPro = false}: subsProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href = response.data.url;
        } catch (error: any) {
            console.log("BILLING_ERROR", error);
        }finally {
            setIsLoading(false);
        }
    };

    return (
        <Button variant={isPro ? "premium": "default"} onClick={onClick}>
            {isPro? "Manage Subscription" : "Upgrade Subscription"}
            {!isPro && <Zap className="w-4 h-4 fill-white ml-2"/>}
        </Button>
    );
};