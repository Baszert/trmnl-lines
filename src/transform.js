function transform(input) {
  if (!input || !input.current || typeof input.current.temperature_2m !== 'number') return input;
  return {
    temp: Math.round(input.current.temperature_2m),
    current: input.current
  };
}
