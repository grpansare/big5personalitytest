



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from '@mui/x-charts';
import Suggestions from '../Components/Suggestions';
import Description from '../Components/Description';
import descriptions from '../Components/Description';
import { Button } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';
import axios from 'axios';



const ResultPage = () => {
   
  const { userAnswers ,currentUser} = useSelector((state) => state.user);

  const [openness, setOpenness] = useState(0);
  const [extraversion, setExtraversion] = useState(0);
  const [conscientiousness, setConscientiousness] = useState(0);
  const [neuroticism, setNeuroticism] = useState(0);
  const [agreeableness, setAgreeableness] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    if (userAnswers) {
      calculateScore();
    }
  }, [userAnswers]);

  const getDescription = (trait, score) => {
    if (score < 50) return descriptions[trait].low;
    if (score >= 50 && score < 75) return descriptions[trait].medium;
    return descriptions[trait].high;
  };

  const calculateScore = () => {
    // Base scores
    let opennessBase = 8, opennessMax = opennessBase + 8;
    let extraversionBase = 20, extraversionMax = extraversionBase + 8;
    let conscientiousnessBase = 14, conscientiousnessMax = conscientiousnessBase + 8;
    let neuroticismBase = 38, neuroticismMax = neuroticismBase + 8;
    let agreeablenessBase = 14, agreeablenessMax = agreeablenessBase + 8;

    // Initial trait scores
    let openness = opennessBase;
    let extraversion = extraversionBase;
    let conscientiousness = conscientiousnessBase;
    let neuroticism = neuroticismBase;
    let agreeableness = agreeablenessBase;
   
    for (let key in userAnswers) {
      const trait = userAnswers[key].Trait;
      const value = checkAnswer(userAnswers[key]);
      const type = userAnswers[key].type;

      if (trait === 'Openness') {
        openness += type === 'positive' ? value : -value;
      } else if (trait === 'Extraversion') {
        extraversion += type === 'positive' ? value : -value;
      } else if (trait === 'Conscientiousness') {
        conscientiousness += type === 'positive' ? value : -value;
      } else if (trait === 'Agreeableness') {
        agreeableness += type === 'positive' ? value : -value;
      } else if (trait === 'Neuroticism') {
        neuroticism += type === 'positive' ? value : -value;
      }
    }

    // Convert scores to percentages based on maximum possible scores
    setOpenness((openness / opennessMax) * 100);
    setExtraversion((extraversion / extraversionMax) * 100);
    setConscientiousness((conscientiousness / conscientiousnessMax) * 100);
    setNeuroticism((neuroticism / neuroticismMax) * 100);
    setAgreeableness((agreeableness / agreeablenessMax) * 100);
  
    
  };

  const checkAnswer = (ans) => {
    if (ans.answer === 'Strongly Agree') return 5;
    if (ans.answer === 'Agree') return 4;
    if (ans.answer === 'Neutral') return 3;
    if (ans.answer === 'Disagree') return 2;
    if (ans.answer === 'Strongly Disagree') return 1;
    return 0;
  };

  const chartData = [
    { trait: 'Openness', value: openness },
    { trait: 'Extraversion', value: extraversion },
    { trait: 'Conscientiousness', value: conscientiousness },
    { trait: 'Agreeableness', value: agreeableness },
    { trait: 'Neuroticism', value: neuroticism },
  ];

  const chartSetting = {
    xAxis: [
      {
        scaleType: 'linear',
        label: 'Percentage (%)',
        min: 0,
        max: 100,
      },
    ],
    yAxis: [
      {
        scaleType: 'band',
        data: chartData.map((data) => data.trait),
        tickSize: 10,
        paddingOuter: 0.2,
      },
    ],
    width: 450,
    height: 270,
    margin: { left: 120, right: 10, top: 70, bottom: 20 },
  };
  const saveresult = async () => {
    const resultData = {
        username: currentUser.username || 'Anonymous', // Replace with user name from state
        openness,
        extraversion,
        conscientiousness,
        neuroticism,
        agreeableness,
        date: new Date(), // Add the current date
    };

    try {
      const response = await axios.post('/result/save-result', resultData);

      // Show success message
      setSnackbarMessage(response.data.message || 'Result saved successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error saving result:', error);

      // Show error message
      setSnackbarMessage('Failed to save result. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  
};
const handleSnackbarClose = () => {
  setSnackbarOpen(false);
};
  

  return (
    <div className="flex flex-col w-full mb-5 items-center">
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={4000} // Closes after 4 seconds
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  
    <div className="result border-4 md:mt-5 mt-3 p-4 rounded-lg shadow-lg max-w-7xl w-full">
      <h2 className="text-center text-xl font-bold mb-4">Your Personality Trait Score</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mx-auto">
        {/* Bar Chart Section */}
        <div className="w-full md:w-1/2 border-4 rounded-lg shadow-md flex justify-center p-4 bg-white">
          <BarChart
            dataset={chartData}
            series={[
              {
                dataKey: 'value',
                label: 'Percentage (%)',
                dataLabel: {
                  position: 'end',
                  formatter: (value) => `${value.toFixed(0)}%`,
                  style: {
                    fontSize: 14,
                    fill: '#000',
                    fontWeight: 'bold',
                  },
                },
              },
            ]}
            layout="horizontal"
            {...chartSetting}
          />
        </div>
  
        {/* Description Section */}
        <div className="desc w-full md:w-1/2 p-4 font-semibold bg-gray-50 rounded-lg shadow-md">
          <p className="mb-4">
            {getDescription("Openness", openness)}
            {getDescription("Extraversion", extraversion)}
            {getDescription("Conscientiousness", conscientiousness)}
            {getDescription("Agreeableness", agreeableness)}
            {getDescription("Neuroticism", neuroticism)}
          </p>
          <div className="button flex justify-center">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={saveresult}
            >
              Save Result
            </Button>
          </div>
        </div>
      </div>
    </div>
  
    <Suggestions
      openness={openness}
      extraversion={extraversion}
      conscientiousness={conscientiousness}
      neuroticism={neuroticism}
      agreeableness={agreeableness}
    />
  </div>
  
  );
};

export default ResultPage;

