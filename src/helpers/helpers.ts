export const trimTextAfterMaxChars = (text: string, maxChars: number) => {
    if (text.length > maxChars) {
      return text.substring(0, maxChars) + '...';
    }
    return text;
  }
  