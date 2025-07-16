import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Rating from '@mui/material/Rating';
import "../../../css/home.css"
import Card from '@mui/joy/Card';
import { 
  AspectRatio, 
  CardContent, 
  CardOverflow, 
  Chip, 
  Link as LinkJoy, 
  Typography as TypographyJoy,
  Button as ButtonJoy,
  CircularProgress,
  SvgIcon,
  CardActions,
  ButtonGroup
 } from "@mui/joy";
import Avatar from '@mui/joy/Avatar';


export default function ActiveUsers(){
  return <div className="users-section">
    <Container className="users-container">
      <Stack className="users-frame">
        
        <Stack className="users-titles">
          <Typography className="title" variant="h1">
            Active Users 
          </Typography>
          <Link className="view-all" href="#"></Link>
        </Stack>

        <Stack className="users-cards-frame">
          <CssVarsProvider>
            {[1,2,3,4].map(ele => {
              return (
                <Card className="card" sx={{ width: 320, maxWidth: '100%', boxShadow: 'xl' }}>
                  <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
                    <TypographyJoy level="title-lg">Josephine Blanton</TypographyJoy>
                    <TypographyJoy level="body-sm" sx={{ maxWidth: '24ch' }}>
                      Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
                      love to code.
                    </TypographyJoy>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        mt: 2,
                        '& > button': { borderRadius: '2rem' },
                      }}
                    >
                    </Box>
                  </CardContent>
                </Card>
              )
            })}           
          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
}