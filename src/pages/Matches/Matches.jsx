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
        const response = await fetch(`https://localhost:8000/matching?noteId=${noteId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();
        setMatch(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setLoading(false);
      }
    };
    console.log("match is: ",match);
    fetchMatches();
  }, [noteId]);

  return (
    <div style={{backgroundColor:'#C0C5C1'}}>
      <Sidebar />
      <div id="main1">
      <LoadingScreen />
      <div style={{ marginTop: '20px' , backgroundColor:'#C0C5C1',minHeight:'85.8vh',display:'flex',justifyContent:'center',alignItems:'center'}} id="main1" >
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <img src="/loading.gif" alt="Loading..." style={{ width: '50px', height: '50px' }} />
          </div>
        ) : match ?(
          <div  style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='my-cell' style={{ backgroundColor: '#303846', minWidth: '350px', maxWidth: '410px', borderRadius: '8px', overflow: 'hidden',backgroundColor:'#3F334D'}}>
              

              
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
                    <span style={{ fontWeight: 'bold' }}>Name:</span> {match?.match}
                  </div>
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>Age:</span> {match?.emotion}
                  </div>
                  <div style={{ marginBottom: '10px', color: '#fff' }}>
                    <span style={{ fontWeight: 'bold' }}>City:</span> {match?.keyword}
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
        ):(
          <div style={{ textAlign: 'center' }}>
          <h2>No matches have been found yet!</h2>
        </div>
        )}
      </div>
      </div>
    </div>

  );
};

export default Matches;
