import React, { useEffect, useState } from 'react';
import { fetchMessage } from '../services/apiService';

const MessageDisplay: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchMessage();
        setMessage(data.message);
        setLoading(false);
      } catch (error) {
        setError('Error fetching message');
        setLoading(false);
      }
    };

    getMessage();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default MessageDisplay;
