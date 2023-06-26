import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345, bgcolor: "#2B2D3F", borderRadius: "16px" }}
      variant="outlined"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Talent Development"
        subheader="September 14, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="/talent-develop.png"
        alt="Talent Development"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Talent development refers to the efforts to build upon employees
          existing skills while identifying new skills and opportunities to help
          achieve organizational goals. It ensures that an organization remains
          competitive in the ever-changing global market.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Why should your organization prioritize talent development?
          </Typography>
          <Typography paragraph>
            If you are concerned with the growing number of skill gaps in your
            organization or have ongoing issues with employee retention, you may
            be curious as to what talent development can do to turn things
            around.
          </Typography>
          <Typography paragraph>
            In the post-Covid job market, organizations have stepped up their
            recruitment efforts to attract the talent displaced from previous
            employment. There are many talented individuals trying to land great
            careers while companies are concerned about finding the right people
            to fill future roles.
          </Typography>
          <Typography paragraph>
            While this may seem like the best option for filling your
            organization with skilled employees, there are problems with this
            thinking. Miguel Carrasco, Senior Partner at Boston Consulting
            Group, told ZDNet, “not all of the surplus capacity in the workforce
            can be redeployed to meet new or growing demand.”
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
