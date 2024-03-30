const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: options.writeMeta && 'style.css',
      })
    );

    if (options.writeMeta) {
      config.plugins.push(
        copy({
          targets: [
            { src: 'LICENSE', dest: 'dist' },
            { src: 'README.md', dest: 'dist' },
            { src: 'package.json', dest: 'dist', transform: pickPackageFields },
          ],
        })
      );
    }

    return config;
  },
};

function pickPackageFields(contents, filename) {
  const data = JSON.parse(contents);
  const {
    version,
    license,
    main,
    homepage,
    repository,
    typings,
    files,
    engines,
    peerDependencies,
    name,
    author,
    module,
    dependencies,
  } = data;

  return JSON.stringify(
    {
      version,
      name,
      author,
      license,
      main,
      homepage,
      repository,
      module,
      typings,
      files,
      engines,
      peerDependencies,
      dependencies,
    },
    null,
    2
  );
}
