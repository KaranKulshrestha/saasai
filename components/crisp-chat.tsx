"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b3b0cfb1-eecf-4b0b-b487-c561c06cd2ca");
    },[]);

    return null;
};