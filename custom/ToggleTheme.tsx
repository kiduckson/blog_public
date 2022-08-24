import React from "react";
import { styled, keyframes } from "../stitches.config";
import { Box, Button } from "../components";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const rotateUp = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(90deg)" },
});
const rotateDown = keyframes({
  "0%": { transform: "rotate(90deg)" },
  "100%": { transform: "rotate(0deg)" },
});

const ToggleButton = styled(Button, {
  "& svg": {
    animation: `${rotateUp} 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  "&:hover svg": {
    animation: `${rotateDown} 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
});

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMount(true);
  }, []);

  const toggleButton = () => {
    let target = theme === "dark" ? "light" : "dark";
    return (
      <ToggleButton ghost onClick={() => setTheme(`${target}`)}>
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </ToggleButton>
    );
  };

  return <Box>{mount && toggleButton()}</Box>;
}
