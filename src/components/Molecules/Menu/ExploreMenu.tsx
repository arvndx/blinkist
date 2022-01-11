import RocketIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceIcon from "@mui/icons-material/Science";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SavingsIcon from "@mui/icons-material/Savings";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ChatIcon from "@mui/icons-material/Chat";
import SpaIcon from "@mui/icons-material/Spa";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { Grid, Container, Typography, Button, Box } from "@material-ui/core";
import theme from "../../configuration/Theme/theme";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 259,
    marginRight: 259,
  },
  buttonStyle: {
    textDecoration: "none",
    textTransform: "none",
    "&:hover": {
      color: "#0365F2",
      border: 0,
    },
  },
}));

type ExploreMenuProps = {
  handleGetByCategory: (category: string) => void;
  handleMouseOut: () => void;
};

export const ExploreMenu = ({
  handleGetByCategory,
  handleMouseOut,
}: ExploreMenuProps) => {
  const category = [
    { label: "Entrepreneurship", icon: <RocketIcon /> },
    { label: "Health", icon: <FitnessCenterIcon /> },
    { label: "Education", icon: <SchoolIcon /> },
    { label: "Politics", icon: <AccountBalanceIcon /> },
    { label: "Economics", icon: <PublicIcon /> },
    { label: "Science", icon: <ScienceIcon /> },
    { label: "Corporate Culture", icon: <WorkOutlineIcon /> },
    { label: "Productivity", icon: <EmojiObjectsIcon /> },
    { label: "Biography", icon: <BorderColorIcon /> },
    { label: "Communication skills", icon: <ChatIcon /> },
    { label: "Nature & Environment ", icon: <SpaIcon /> },
    { label: "Marketing & sales", icon: <TrendingDownIcon /> },
    { label: "Psycology", icon: <PsychologyIcon /> },
    { label: "Money & Investments", icon: <SavingsIcon /> },
    { label: "History", icon: <HistoryEduIcon /> },
    { label: "Management & Leadership", icon: <HistoryEduIcon /> },
  ];

  const classes = useStyles();
  return (
    <Container
      onMouseLeave={handleMouseOut}
      style={{ marginLeft: 259, marginRight: 259 }}
    >
      <Box maxWidth={960} marginLeft={5}>
        <Grid container direction='row' spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant='subtitle2'>
              Explore by category &nbsp;
              <Divider />
            </Typography>
          </Grid>

          {category.map(({ label, icon }) => {
            return (
              <Grid item md={4} sm={6} xs={12}>
                <Button
                  children={label}
                  size='small'
                  startIcon={icon}
                  onClick={() => [handleGetByCategory(label), handleMouseOut]}
                  component={Link}
                  className={classes.buttonStyle}
                  disableFocusRipple
                  disableTouchRipple
                  disableRipple
                  to='/bookRepository/:category'
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default ExploreMenu;
