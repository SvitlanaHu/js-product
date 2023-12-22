import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';

const paginationContainer = document.getElementById('pagination');

const pagination = new Pagination(paginationContainer, {
  totalItems: totalItems,
  itemsPerPage: perPage,
  visiblePages: 4,
  centerAlign: true,
});
