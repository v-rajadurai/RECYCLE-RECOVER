import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";  // Import Link here
import axios from "axios";

const defaultTheme = createTheme();

export default function RagSignUp() {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    state: "",
  });

  // State variables for individual field alerts
  const [alerts, setAlerts] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    state: "",
    form: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setAlerts((prevAlerts) => ({
      ...prevAlerts,
      [name]: "",
    }));
  };

  const handleNext = async (event) => {
    event.preventDefault();

    // Validate step 1 fields
    if (step === 1) {
      let valid = true;
      const newAlerts = {};

      if (!formData.firstName) {
        newAlerts.firstName = "First Name is required";
        valid = false;
      }
      if (!formData.lastName) {
        newAlerts.lastName = "Last Name is required";
        valid = false;
      }
      if (!formData.email) {
        newAlerts.email = "Email Address is required";
        valid = false;
      }
      if (!formData.password) {
        newAlerts.password = "Password is required";
        valid = false;
      }

      if (!valid) {
        setAlerts((prevAlerts) => ({
          ...prevAlerts,
          ...newAlerts,
        }));
        return;
      }

      setStep(2);
    } else if (step === 2) {
      // Validate step 2 fields
      let valid = true;
      const newAlerts = {};

      if (!formData.phone) {
        newAlerts.phone = "Phone Number is required";
        valid = false;
      }
      if (!formData.address) {
        newAlerts.address = "Address is required";
        valid = false;
      }
      if (!formData.city) {
        newAlerts.city = "City is required";
        valid = false;
      }
      if (!formData.state) {
        newAlerts.state = "State is required";
        valid = false;
      }

      if (!valid) {
        setAlerts((prevAlerts) => ({
          ...prevAlerts,
          ...newAlerts,
        }));
        return;
      }

      // Handle form submission
      const details = {
        email: formData.email,
        pass: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
      };

      try {
        const response = await axios.post("http://localhost:8080/api/register", details);
        console.log("Success:", response.data);
        setAlerts({ form: "Sign up successful! Redirecting..." });
        setTimeout(() => {
          navigate("/consumersignin");
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        setAlerts({ form: "Error in signup" });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="md"
        sx={{ height: "100%", padding: "4rem" }}
      >
        <CssBaseline />
        <Box
          sx={{
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backdropFilter: "blur(20px)",
            padding: "60px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {alerts.form && (
            <Alert severity={alerts.form.includes("successful") ? "success" : "error"} sx={{ mb: 2 }}>
              {alerts.form}
            </Alert>
          )}
          <Box component="form" noValidate onSubmit={handleNext} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {step === 1 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!alerts.firstName}
                      helperText={alerts.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={!!alerts.lastName}
                      helperText={alerts.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!alerts.email}
                      helperText={alerts.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleChange}
                      error={!!alerts.password}
                      helperText={alerts.password}
                    />
                  </Grid>
                </>
              )}
              {step === 2 && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!alerts.phone}
                      helperText={alerts.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      error={!!alerts.address}
                      helperText={alerts.address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      error={!!alerts.city}
                      helperText={alerts.city}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      error={!!alerts.state}
                      helperText={alerts.state}
                    />
                  </Grid>
                </>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {step === 1 ? "Next" : "Sign Up"}
            </Button>
            {step === 2 && (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/consumersignin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
