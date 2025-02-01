import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import suggestions from '../utils/suggestions';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import descriptions from './Description';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme, expanded }) => ({
  backgroundColor: expanded ? 'lightblue' : 'rgba(0, 0, 0, .03)', // Change background based on expanded state
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: expanded ? 'lightblue' : 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Suggestions({openness,extraversion,conscientiousness,neuroticism,agreeableness}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='max-w-6xl  p-4  flex flex-col gap-3 rounded-lg'>
      <h3 className="text-center mt-5 font-semibold  font-mono">Suggestions</h3>
      <Accordion defaultExpanded expanded={expanded === 'panel1' } style={{borderRadius:"23px",borderBottom:"10px"}} onChange={handleChange('panel1')}>
      <AccordionSummary
  aria-controls="panel1d-content"
  id="panel1d-header"
  expanded={expanded === 'panel1'}
>
  <Typography className="">Openness To Experience</Typography>
</AccordionSummary>

        <AccordionDetails >
          <Typography>
          {/* {openness} */}
          {(openness >= 50 && openness <= 75) && (
  <p>
    {suggestions['Openness']['medium'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
  </p>
)}

         
          { (openness >75 ) &&
          (<p>
            {suggestions['Openness']['high'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          { (openness <50 ) &&
          (<p>
            {suggestions['Openness']['low'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{borderRadius:"23px",borderBottom:"10px"}} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"   expanded={expanded === 'panel2'}>
          <Typography>Extraversion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {(extraversion >= 50 && extraversion < 75) && (
  <p>
    {suggestions['Extraversion']['medium'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
  </p>
)}

         
          { (extraversion >=75 ) &&
          (<p>
            {suggestions['Extraversion']['high'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          { (extraversion <50 ) &&
          (<p>
            {suggestions['Extraversion']['low'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{borderRadius:"23px",borderBottom:"10px"}} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"   expanded={expanded === 'panel3'}>
          <Typography>Conscentiousness</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          {(conscientiousness >= 50 && conscientiousness < 75) && (
  <p>
    {suggestions['Conscientiousness']['medium'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
  </p>
)}

         
          { (conscientiousness >=75 ) &&
          (<p>
            {suggestions['Conscientiousness']['high'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          { (conscientiousness <50 ) &&
          (<p>
            {suggestions['Conscientiousness']['low'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{borderRadius:"23px",borderBottom:"10px"}} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"   expanded={expanded === 'panel4'}>
          <Typography>Neuroticism</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          {(neuroticism >= 50 && neuroticism < 75) && (
  <p>
    {suggestions['Neuroticism']['medium'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
  </p>
)}

         
          { (neuroticism >=75 ) &&
          (<p>
            {suggestions['Neuroticism']['high'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          { (neuroticism <50 ) &&
          (<p>
            {suggestions['Neuroticism']['low'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{borderRadius:"23px",borderBottom:"10px"}} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"   expanded={expanded === 'panel5'}>
          <Typography>Agreebleness</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          {(agreeableness >= 50 && agreeableness < 75) && (
  <p>
    {suggestions['Agreeableness']['medium'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
  </p>
)}

         
          { (agreeableness >=75 ) &&
          (<p>
            {suggestions['Agreeableness']['high'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          { (agreeableness <50 ) &&
          (<p>
            {suggestions['Agreeableness']['low'].map((line, index) => (
      <li key={index}>{line}</li>
    ))}
          </p>)

          }
         
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}



