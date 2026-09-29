export const THEME_STORAGE_KEY = "theme-preference";

export const themePreferences = ["light", "system", "dark"] as const;

export type ThemePreference = (typeof themePreferences)[number];

export function isThemePreference(
  value: string | null,
): value is ThemePreference {
  return themePreferences.some((preference) => preference === value);
}

export function applyThemePreference(preference: ThemePreference): void {
  if (preference === "system") {
    delete document.documentElement.dataset.theme;
    return;
  }

  document.documentElement.dataset.theme = preference;
}

export function readThemePreference(): ThemePreference {
  try {
    const storedPreference = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(storedPreference) ? storedPreference : "system";
  } catch (error) {
    console.warn("Unable to read the saved theme preference.", error);
    return "system";
  }
}

export function saveThemePreference(preference: ThemePreference): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch (error) {
    console.warn("Unable to save the theme preference.", error);
  }
}
