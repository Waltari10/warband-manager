import React, { useEffect, useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Bar from './Bar';

const OfflineBar = () => {

  const [isOnline, setIsOnline] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return () => {
      window.removeEventListener('online');
      window.removeEventListener('offline');
    };
  }, []);

  return (
    <Bar
      bgColor={theme.palette.error.main}
      isVisible={!isOnline}
    >
      You are offline. Your warband changes may not have been saved.
    </Bar>
  );
};

export default OfflineBar;


