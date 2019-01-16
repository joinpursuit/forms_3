export const setting = {
  name: "",
  date: "",
  diet: "",
  country: "",
  dietOptions: [
    {name: ""},
    {name: 'Omnivore'},
    {name: 'Vegetarian'},
    {name: 'Vegan'}
  ],
  textInput: "",
  question1Label: 'Can you breathe underwater longer than 1 minute?',
  question1Choices: [
    {id: 1, value: 'Yes', label: 'Yes'},
    {id: 2, value: 'No', label: 'No'},
    {id: 3, value: 'I dont know', label: 'I dont know'}
  ],
  question2Label: 'What is your marital status?',
  question2Choices: [
    {id: 1, value: 'Married', label:'marriage'},
    {id: 2, value: 'Unmarried', label: 'unmarried'}
  ],
  question3Label: 'When you are in a stressful or difficult situation, how do you most frequently react?',
  question3Choices: [
    {id: 1, value: 'Determination: I continue to confront the situation.', label: 'ques3Choice1'},
    {id: 2, value: 'Defeat: I stop confronting the situation.', label: 'ques3Choice2'},
    {id: 3, value: 'Anger: I become upset at the situation', label: 'ques3Choice3'},
    {id: 4, value: 'Resourcefulness: I seek help to confront the situation.', label: 'ques3Choice4'}
  ],
  question4Label: 'Are you Claustrophobic?',
  question4Choices: [
    {id: 1, value: 'Yes', label: 'Yes'},
    {id: 2, value: 'No', label: 'No'},
    {id: 3, value: 'I dont know', label: 'I dont know'}
  ],
  question5Label: 'Does your family have a history of (check all that apply): ',
  question5Choices: [
    {id: 1, value: 'Cancer', label: 'Cancer'},
    {id: 2, value: 'Heart Disease', label: 'Heart Disease'},
    {id: 3, value: 'Diabetes', label: 'Diabetes'}
  ],
  question6Label: 'Do you have any living (check all that apply): ',
  question6Choices: [
    {id: 1, value: 'Sibilings?', label: 'sibilings'},
    {id: 2, value: 'Parents?', label: 'parents'},
    {id: 3, value: 'Grandparents?', label: 'grandparents'}
  ],
  sibilings: 0,
  parents: 0,
  grandparents: 0,
  sibilingsAmount: false,
  parentsAmount: false,
  grandparentsAmount: false,
  question7Label: 'Check all educational credentials you have received:',
  question7Choices: [
    {id: 1, value: 'High school diploma or GED equivalent', label: 'diploma'},
    {id: 2, value: "Associate's Degree", label: 'Associates'},
    {id: 3, value: "Bachelor's Degree", label: 'Bacherlors'},
    {id: 4, value: "Master's Degree", label: 'Masters'},
    {id: 5, value: 'PhD', label: 'phd'},
    {id: 6, value:'Other', label: 'other'}
  ],
  message: '',
  completed: false,
  submitted: false
};
