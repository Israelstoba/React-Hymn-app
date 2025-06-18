// src/pages/HymnPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HymnDisplay from '../components/HymnDisplay';
import Footer from '../components/Footer';

function HymnPage() {
  return (
    <div id="hymn-page-con">
      <HymnDisplay />
      <Footer />
    </div>
  );
}

export default HymnPage;
