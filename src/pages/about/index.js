import PageDescription  from "@/components/PageDescription";
import { Button, Chip, Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function AboutPage({skills}) {
  const router = useRouter();
  return (
    <section>
      <PageDescription
        title="About me"
        description="I am a passionate fullstack developer who loves to write clean, maintainable code and solve challenging problems. Collaboration and continuous learning are key values in my work"
      />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <h2>Get to know me</h2>
          <p>
            One of my strengths is my ability to work well in teams,
            collaborating with designers, product managers, and other developers
            to deliver high-quality software
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </Grid>
        <Grid item md={6}>
          <h2>My Skills</h2>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {
            skills.map((skill, index) => (
              <Chip key={skill} label={skill} />                    
            ))
          }
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
}

export async function getStaticProps() {
  let skills = [];
  try {
    const response = await fetch("https://fullstack-3-frontend-default-rtdb.firebaseio.com/skills.json");
    const data = await response.json();
    skills = data.split(",");
  } catch (error) {
    console.log(error);
  }

    return {  
        props: {
            skills,
            revalidate: 30
        }
    };
}