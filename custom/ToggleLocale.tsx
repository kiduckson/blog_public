// next import for locale
import Link from "next/link";
import { useRouter } from "next/router";

// stiches for styles
import { styled, keyframes } from "../stitches.config";

// components
import { Box, Button, Text } from "../components";

export function ToggleLocale() {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;
  const [otherLocale] = (locales || []).filter((locale) => locale !== activeLocale);

  const toggleButton = () => {
    return (
      <Link href={{ pathname, query }} as={asPath} locale={otherLocale} legacyBehavior>
        <Button ghost>{activeLocale}</Button>
      </Link>
    );
  };

  return <Box>{toggleButton()}</Box>;
}
