import { Navigate, Route, Routes } from "react-router";
import { Base64CodecPage } from "@/pages/base64-codec";
import { ColorConverterPage } from "@/pages/color-converter";
import { CssUnitConverterPage } from "@/pages/css-unit-converter";
import { GradientGeneratorPage } from "@/pages/gradient-generator";
import { HashGeneratorPage } from "@/pages/hash-generator";
import { HomePage } from "@/pages/home";
import { JsonFormatterPage } from "@/pages/json-formatter";
import { RegexTesterPage } from "@/pages/regex-tester";
import { TimestampConverterPage } from "@/pages/timestamp-converter";
import { UrlCodecPage } from "@/pages/url-codec";
import { UuidGeneratorPage } from "@/pages/uuid-generator";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/color-converter" element={<ColorConverterPage />} />
      <Route path="/timestamp-converter" element={<TimestampConverterPage />} />
      <Route path="/json-formatter" element={<JsonFormatterPage />} />
      <Route path="/url-codec" element={<UrlCodecPage />} />
      <Route path="/base64-codec" element={<Base64CodecPage />} />
      <Route path="/css-unit-converter" element={<CssUnitConverterPage />} />
      <Route path="/gradient-generator" element={<GradientGeneratorPage />} />
      <Route path="/regex-tester" element={<RegexTesterPage />} />
      <Route path="/uuid-generator" element={<UuidGeneratorPage />} />
      <Route path="/hash-generator" element={<HashGeneratorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
