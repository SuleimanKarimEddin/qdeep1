import { useState, useEffect } from 'react';
import { PaginationAntd, PaginationMeta } from '../types/app';
import { QueryPaginationEnum } from '../enums/TankStackQueryEnum';

interface Data {
  meta: PaginationMeta;
}

const usePagination = (data: Data) => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const page = urlParams.get('page') || QueryPaginationEnum.DEFAULT_PAGE;
  const per_page =
    urlParams.get('per_page') || QueryPaginationEnum.DEFAULT_PER_PAGE;

  const [pagination, setPagination] = useState<PaginationAntd>({
    current:
      data?.meta?.current_page ||
      Number(page) ||
      QueryPaginationEnum.DEFAULT_PAGE,
    pageSize:
      data?.meta?.per_page ||
      Number(per_page) ||
      QueryPaginationEnum.DEFAULT_PER_PAGE,
    total: data?.meta?.total || 0,
  });

  useEffect(() => {
    setPagination({
      current:
        data?.meta?.current_page ||
        Number(page) ||
        QueryPaginationEnum.DEFAULT_PAGE,
      pageSize:
        data?.meta?.per_page ||
        Number(per_page) ||
        QueryPaginationEnum.DEFAULT_PER_PAGE,
      total: data?.meta?.total || 0,
    });
  }, [data]);

  const handlePageChange = (page: number, pageSize: number) => {
  };

  return { pagination, handlePageChange };
};

export default usePagination;
