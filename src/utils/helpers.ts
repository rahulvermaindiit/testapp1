export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const toTitleCase = (value: string) =>
  value.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

export const formatEmailName = (email?: string | null) => {
  if (!email) {
    return 'Guest';
  }
  const [name] = email.split('@');
  return toTitleCase(name.replace(/[.\-_]/g, ' '));
};

