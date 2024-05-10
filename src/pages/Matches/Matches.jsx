import React, { useState, useEffect } from 'react';
import { useLoading } from "../../utils/hooks/useLoading";
import { Sidebar } from '../../components';

const Matches = ({ noteId }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setError, LoadingScreen } = useLoading();

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/matches/${noteId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMatches(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, [noteId]);

  return (
    <div>
        <Sidebar />
      <LoadingScreen />
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>Matches</h2>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <img src="/loading.gif" alt="Loading..." style={{ width: '50px', height: '50px' }} />
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {matches.map((match, index) => (
            <div key={index} style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
              {/* Display match details here */}
              {/* Example: <p>{match.title}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Matches;
