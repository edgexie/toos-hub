import { Navigate, Route, Routes } from 'react-router';
import { Base64CodecPage } from '@/pages/base64-codec';
import { BotwMapPage } from '@/pages/botw-map';
import { CadViewerPage } from '@/pages/cad-viewer';
import { ColorConverterPage } from '@/pages/color-converter';
import { CssUnitConverterPage } from '@/pages/css-unit-converter';
import { CronParserPage } from '@/pages/cron-parser';
import { GradientGeneratorPage } from '@/pages/gradient-generator';
import { HashGeneratorPage } from '@/pages/hash-generator';
import { HomePage } from '@/pages/home';
import { MarkdownPreviewPage } from '@/pages/markdown-preview';
import { JsonFormatterPage } from '@/pages/json-formatter';
import { JsonToTsPage } from '@/pages/json-to-ts';
import { JwtParserPage } from '@/pages/jwt-parser';
import { StringToolboxPage } from '@/pages/string-toolbox';
import { RegexTesterPage } from '@/pages/regex-tester';
import { TimestampConverterPage } from '@/pages/timestamp-converter';
import { XmlFormatterPage } from '@/pages/xml-formatter';
import { UrlCodecPage } from '@/pages/url-codec';
import { UuidGeneratorPage } from '@/pages/uuid-generator';
import { YamlFormatterPage } from '@/pages/yaml-formatter';

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
      <Route path="/cad-viewer" element={<CadViewerPage />} />
      <Route path="/botw-map" element={<BotwMapPage />} />
      <Route path="/yaml-formatter" element={<YamlFormatterPage />} />
      <Route path="/jwt-parser" element={<JwtParserPage />} />
      <Route path="/string-toolbox" element={<StringToolboxPage />} />
      <Route path="/json-to-ts" element={<JsonToTsPage />} />
      <Route path="/markdown-preview" element={<MarkdownPreviewPage />} />
      <Route path="/cron-parser" element={<CronParserPage />} />
      <Route path="/xml-formatter" element={<XmlFormatterPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
