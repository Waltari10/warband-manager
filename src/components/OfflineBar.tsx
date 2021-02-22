import React, { useEffect, useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import Bar from './Bar';

const OfflineBar: React.FunctionComponent = () => {

  const [isOnline, setIsOnline] = useState(true);
  const theme = useTheme();

  useEffect(() => {

    const setOnlineTrue = () => setIsOnline(true);
    const setOnlineFalse = () => setIsOnline(false);

    window.addEventListener('online', setOnlineTrue);
    window.addEventListener('offline', setOnlineFalse);

    return () => {
      window.removeEventListener('online', setOnlineTrue);
      window.removeEventListener('offline', setOnlineFalse);
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


