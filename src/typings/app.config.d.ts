declare module '@/app.config.json' {
  const config: {
    navigation: Array<{
      title: string,
      href: string
    }>,
    footer: {
      items: Array<{
        title: string,
        href: string
      }>,
      copyright: string
    } 
  };

  export default config;
}