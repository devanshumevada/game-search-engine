import 'dayjs';
import dayjs from 'dayjs';
const base_url = "https://api.rawg.io/api/";
const current_date = dayjs().format("YYYY-MM-DD");
const last_year_date = dayjs().subtract(1,"year").format("YYYY-MM-DD");
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${last_year_date},${current_date}&rating=-rating&page_size=10`;
export const get_popular_games_api_url = () => `${base_url}${popular_games}`;





