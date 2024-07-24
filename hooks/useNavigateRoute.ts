import React, { useEffect } from 'react';
import { AxiosQueryStatusType } from '../types/axios';

function useNavigateRoute({
  path,
  status,
}: {
  path: undefined | string | null | number;
  status: AxiosQueryStatusType;
}) {
  useEffect(() => {
    if (path && status === 'success') {
    }
  }, [status]);
}

export default useNavigateRoute;
