# Say hello functions

based on https://www.youtube.com/watch?v=xnfdm-s8adI

A list of not so helpful functions. this is a test library.

- use engine for documenting node version
    - https://www.reddit.com/r/reactjs/comments/18iqimx/im_trying_to_find_the_node_version_of_an_old/
    - https://betterstack.com/community/questions/specify-version-in-package-json/

- for publishing to your custom artifactory like nesus or jfrog : https://stackoverflow.com/questions/56360074/how-to-publish-deploy-a-npm-package-to-custom-artifactory#:~:text=Edit%20your%20package.,%2Fnpm%2Fnpm%2Drepo%2F

possible issues while publishing :
- run `npm publish --access=public` for public node package (https://stackoverflow.com/questions/41981686/getting-error-402-while-publishing-package-using-npm)
-https://stackoverflow.com/questions/54950544/npm-publish-registry-403-forbidden-you-dont-have-permission-to-publish

make sure to have node 18 and tsup installed, check it with `npm ls --depth=0 -global`

### instead of each time running `npm login` add this to `.npmrc`:
```
registry=https://registry.npmjs.com/
_auth="<token>"
email=<email>
always-auth=true
```

# other usefull links :
- https://urre.me/writings/test-local-npm-packages/
- https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module

