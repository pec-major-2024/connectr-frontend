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
        const mockMatches = [
          { name: 'John', age: 30, city: 'New York' },
          { name: 'Alice', age: 25, city: 'Los Angeles' },
          { name: 'Bob', age: 35, city: 'Chicago' },
          { name: 'Emma', age: 28, city: 'Houston' },
          { name: 'Michael', age: 40, city: 'Miami' },
          { name: 'Sophia', age: 27, city: 'Dallas' },
          { name: 'William', age: 32, city: 'Atlanta' },
        ];
        setMatches(mockMatches);
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
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src="/loading.gif" alt="Loading..." style={{ width: '50px', height: '50px' }} />
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#303846', width: '100%', maxWidth: '900px', borderRadius: '8px', overflow: 'hidden' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff', fontWeight: 'bold' }}>Matches</h2>
              {matches.map((match, index) => (
                <div
                  key={index}
                  style={{
                    padding: '20px',
                    borderBottom: '1px solid #fff',
                    transition: 'background-color 0.3s ease',
                    ':hover': { backgroundColor: '#434f5b' },
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>Name:</span> {match.name}
                  </div>
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>Age:</span> {match.age}
                  </div>
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>City:</span> {match.city}
                  </div>
                  <button
                    style={{
                      alignSelf: 'flex-end',
                      backgroundColor: '#2962ff',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: 'auto',
                      transition: 'background-color 0.3s ease',
                      hover: { backgroundColor: '#0039cb' },
                    }}
                  >
                    Chat Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
