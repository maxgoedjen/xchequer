# xchequer
GitHub action to read xcodebuild output and post a check for errors and test failures

<img src="/.github/resources/screenshot.png" alt="Screenshot of xchequer output" width="600">

## Getting set up

- In your existing action, make sure you're writing your xcodebuild log out to disk.
```yaml
      - name: Build project
        run: xcrun xcodebuild clean build -project MyProject.xcodeproj -scheme MyProject > log.txt	
```
- Add this step to after your build step
```yaml
    - name: Create annotations
      uses: maxgoedjen/xchequer@INSERT_LATEST_VERSION_HERE
      if: always()
      with:
        log: log.txt

```

