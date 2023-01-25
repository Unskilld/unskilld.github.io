import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatisticsText = styled(Box)(() => ({
    textAlign: 'center',
    fontSize: "35px",
    color: "F#F#F#",
    height: 60,
    lineHeight: '100px',
  }));

const StatisticsNumber = styled(Box)(() => ({
    textAlign: 'center',
    fontSize: "60px",
    color: "F#F#F#",
    height: 60,
    lineHeight: '90px',
}));

const StatisticsBox = styled(Box)(() => ({
    background: '#E6E6E6',
    height: 60,
    lineHeight: '60px',
    width: 350,
    height: 150,
    borderRadius: 20,
}));


export default function StatisticsCard(props) {
    return (
        <StatisticsBox>
            <StatisticsNumber >{props.data.value}</StatisticsNumber>
            <StatisticsText >{props.data.fieldName}</StatisticsText>
        </StatisticsBox>
    );
}