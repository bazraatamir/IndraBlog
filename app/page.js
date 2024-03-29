"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Categories from "@/components/category";

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Categories />
    </main>
  );
}
