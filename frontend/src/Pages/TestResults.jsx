import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import './Results.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import descriptions from "../Components/Description";
import { BarChart } from "@mui/x-charts";

const TestResult = () => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page
  const [openModal, setOpenModal] = useState(false); // Modal state
  const [selectedResult, setSelectedResult] = useState(null); // Selected result for the modal
  const { currentUser } = useSelector((state) => state.user);
 

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    try {
      const response = await axios.get(
        `/result/get-results/${currentUser.username}`
      );
      if (response.data.results) {
        setResults(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      alert("Failed to fetch results.");
    }
  };
  const chartData = [
    { trait: 'Openness', value: selectedResult?.openness },
    { trait: 'Extraversion', value: selectedResult?.extraversion },
    { trait: 'Conscientiousness', value: selectedResult?.conscientiousness },
    { trait: 'Agreeableness', value: selectedResult?.agreeableness },
    { trait: 'Neuroticism', value: selectedResult?.neuroticism },
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const getDescription = (trait, score) => {
    if (score < 50) return descriptions[trait].low;
    if (score >= 50 && score < 75) return descriptions[trait].medium;
    return descriptions[trait].high;
  };
  const handleViewResult = (result) => {
    console.log(result);
    
    setSelectedResult(result);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedResult(null);
  };

  return (
    <div className="mt-5 h-full flex flex-col justify-center gap-5">
      <Typography variant="h5" className="text-center" gutterBottom>
        Test Results
      </Typography>
      <div className="  flex  justify-center flex-col items-center">
        <TableContainer component={Paper} className="result-table">
          <Table>
            <TableHead sx={{ backgroundColor: "#aec6cf" }}>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{new Date(result.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleViewResult(result)}
                      >
                        View Result
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={results.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </div>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}  sx={{ '& .MuiDialog-paper': { width: '80%', maxWidth: '800px' } }}>
        <DialogTitle>Result Details</DialogTitle>
        <DialogContent>
          {selectedResult ? (
            <div>
             <div className="border-2  mt-5 p-4  rounded-lg shadow-lg">
        <h2>Your Personality Trait Score</h2>
        <div className="result flex  flex-col items-center justify-center max-w-7xl">
          <div className="w-full border-4 flex justify-center p-3">
        <BarChart
          dataset={[
            { trait: 'Openness', value: selectedResult.openness },
            { trait: 'Extraversion', value: selectedResult.extraversion },
            { trait: 'Conscientiousness', value: selectedResult.conscientiousness },
            { trait: 'Agreeableness', value: selectedResult.agreeableness },
            { trait: 'Neuroticism', value: selectedResult.neuroticism },
          ]}
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
        <div className="desc w-full md:w-50 p-4 font-semibold">
      <p>{getDescription("Openness",selectedResult.openness)}
    {getDescription("Extraversion",selectedResult.extraversion)}
      {getDescription("Conscientiousness",selectedResult.conscientiousness)}
    {getDescription("Agreeableness",selectedResult.agreeableness)}
    {getDescription("Neuroticism",selectedResult.neuroticism)}</p>

 
    </div>
    </div>
      </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TestResult;
