import React from 'react';

export const PageBackdrop: React.FC = () => (
  <div className="page-backdrop" aria-hidden>
    <div className="page-backdrop__grid" />
    <div className="page-backdrop__blob page-backdrop__blob--1" />
    <div className="page-backdrop__blob page-backdrop__blob--2" />
    <div className="page-backdrop__noise" />
  </div>
);
