import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';



export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  console.log(res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data })
};

export const fetchSurveysByTitle = () => async dispatch => {
  const res = await axios.get('/api/surveys/sortByTitle');
  console.log(res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data })
};

export const fetchSurveysBySentDate = () => async dispatch => {
  const res = await axios.get('/api/surveys/sortByDateSent');
  console.log(res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data })
};

export const fetchSurveysByYes = () => async dispatch => {
  const res = await axios.get('/api/surveys/sortByYes');
  console.log(res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data })
};

export const fetchSurveysByNo = () => async dispatch => {
  const res = await axios.get('/api/surveys/sortByNo');
  console.log(res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data })
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  
  
  dispatch({ type: FETCH_USER, payload: res.data });
  history.push('/surveys')
};

export const submitEdit = (values, id, history)  => async (dispatch) =>{
  
  console.log(values);
  const res = await axios.patch(`/api/surveys/${id}`, values);
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
  history.push('/surveys');
};

export const deleteSurvey =  (id, history) => async dispatch => {
  const res = await axios.delete(`/api/surveys/${id}`);
  console.log(res.data);
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
  history.push('/surveys');
}


