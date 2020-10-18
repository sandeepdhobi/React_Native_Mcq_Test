export const GET_NEXT = 'GET_NEXT';
export const SELECTED_ANSWER = 'SELECTED_ANSWER';
export const RESET = 'RESET';

const initialState = { 
    Questions :
    {
        '01':
        {
          id: '01',
          nextQuestionId:'02',
          question: 'who is prime minister of india ?',
          correctAnswerId: '1',
          options: [
            {
              id: '1',
              text: 'narendra modi',
            },
            {
              id: '2',
              text: 'abcd',
            },
            {
              id: '3',
              text: 'xyz',
            },
            {
              id: '4',
              text: 'sahwag',
            },
          ],
        },
        '02':
        {
          id: '02',
          nextQuestionId:'03',
          question: 'who is chief minister of Manarashtra ?',
          correctAnswerId: '1',
          options: [
            {
              id: '1',
              text: 'Uddhhav thakrey ji',
            },
            {
              id: '2',
              text: 'bb bawan',
            },
            {
              id: '3',
              text: 'mm moze',
            },
            {
              id: '4',
              text: 'rabeee',
            },
            {
            id: '5',
            text: 'rabde',
            },
          ],
        },
        '03':
        {
          id: '03',
          nextQuestionId:'04',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            },
            {
                id: '4',
                text: 'dasfas',
              },
              {
                id: '5',
                text: 'asfd',
              },
              {
                id: '6',
                text: 'afdsa',
              }
          ],
        },
        '04':
        {
          id: '04',
          nextQuestionId:'05',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '05':
        {
          id: '05',
          nextQuestionId:'06',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '06':
        {
          id: '06',
          nextQuestionId:'07',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '07':
        {
          id: '07',
          nextQuestionId:'08',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '08':
        {
          id: '08',
          nextQuestionId:'09',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '09':
        {
          id: '09',
          nextQuestionId:'10',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '10':
        {
          id: '10',
          nextQuestionId:'11',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '11':
        {
          id: '11',
          nextQuestionId:'12',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '12':
        {
          id: '12',
          nextQuestionId:'13',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '13':
        {
          id: '13',
          nextQuestionId:'14',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '14':
        {
          id: '14',
          nextQuestionId:'15',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '15':
        {
          id: '15',
          nextQuestionId:'16',
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },
        '16':
        {
          id: '16',
          nextQuestionId:null,
          question: 'who is Goverener of india ?',
          correctAnswerId: '2',
          options: [
            {
              id: '1',
              text: 'abcd',
            },
            {
              id: '2',
              text: 'xyz',
            },
            {
              id: '3',
              text: 'A - Z',
            }
          ],
        },

    },
    currentQuestionId:'01',
    Answered:{},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEXT:
      return { ...state, currentQuestionId: action.payload.questionId };
    case SELECTED_ANSWER:
      state.Answered[state.currentQuestionId] = { answerId: action.payload.answerId };
      return { ...state };
    case RESET:
        return { ...state, currentQuestionId:'01', Answered:{} };
    default:
      return state;
  }
}

export function nextQuestion(id) {
  return {
    type: GET_NEXT,
    payload: {
      questionId: id
    }
  };
}

export function selectAnswer(id) {
    return {
      type: SELECTED_ANSWER,
      payload: {
        answerId: id
      }
    };
  }
  export function reset() {
    return {
      type: RESET,
      payload: {
      }
    };
  }
