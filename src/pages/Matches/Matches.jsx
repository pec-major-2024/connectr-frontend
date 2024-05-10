import React, { useState, useEffect } from 'react';
import { useLoading } from "../../utils/hooks/useLoading";
import { Sidebar } from '../../components';
import "./Matches.css"
import { useParams } from 'react-router-dom';

const Matches = () => {
  const [match, setMatch] = useState();
  const [loading, setLoading] = useState(false);
  const { setError, LoadingScreen } = useLoading();
  const noteId = useParams().noteId;

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const mockMatches = 
          { name: 'John', age: 30, city: 'New York' };
        setMatch(mockMatches);
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
      <div style={{ marginTop: '20px' }} >
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src="/loading.gif" alt="Loading..." style={{ width: '50px', height: '50px' }} />
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='my-cell' style={{ backgroundColor: '#303846', width: '100%', maxWidth: '410px', borderRadius: '8px', overflow: 'hidden' }}>
            <h2  style={{ textAlign: 'center', marginBottom: '20px', color: '#fff', fontWeight: 'bold' }}>Matched User</h2>
              
                <div 
                className='myblock'
                  style={{
                    padding: '20px',
                    margin: '0 auto',
                    borderBottom: '1px solid #fff',
                    transition: 'background-color 0.3s ease',
                    ':hover': { backgroundColor: '#434f5b' },
                    display: 'flex',
                    flexDirection: 'column',
                    // marginBottom: '20px',
                  }}
                >
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>Name:</span> {match?.name}
                  </div>
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>Age:</span> {match?.age}
                  </div>
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>City:</span> {match?.city}
                  </div>
                  <button
                  id='btn1'
                    style={{
                      alignSelf: 'flex-end',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: 'auto',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    Chat Now
                  </button>
                </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
