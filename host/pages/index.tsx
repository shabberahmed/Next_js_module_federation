'use client'
import React from 'react'
import { lazy } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// @ts-ignore
const SampleComponent = dynamic(() => import('remote/button'));
const index = () => {
  return (
    <div>
      <h3>next js host</h3>
      <SampleComponent/>
      //@ts-ignore
      <Link href="/new">new</Link>
    </div>
  )
}

export default index