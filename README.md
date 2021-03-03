# React Native - Basics

---

## Starta igång repot

### Initial konfiguration

- Man behöver ha satt upp miljön först för att kunna köra projektet. Om du inte redan har gjort det så kan du hitta hur man gör här:
  https://reactnative.dev/docs/environment-setup
  Observera det är olika installationer om man ska köra på Windows eller Mac.
  Har du Windows kommer du endast kunna köra Android.

#### React navigation - bibliotek för navigering

Om du sitter med android så ska du inte behöva göra något. React Native länkar det automatiskt-
Om du testar även ios så kommer du få fel för det man måste göra är att länka ihop React Navigation. Kommando att köra för ios: `npx pod-install ios`

### Kommandon

Starta android: `npx react-native run android` eller ` npm run android`
Starta ios: `npx react-native run-ios` eller `npm run ios`
Starta med egen metro: `npm start`

### Om allt funkar 
Bör du se något sånt här för Android: 
![image](https://user-images.githubusercontent.com/31372172/109775262-94e85e00-7c01-11eb-8cba-20cac367ac26.png)
I ios kommer utseendet att skilja sig lite vilket är i sin ordning.

### Övningar

1. Ändra texten i Text komponenten till valfri text och lägg på valfri stil i Home.js src/screens/Home
2. Importera in Image från react-native. Använd vilken bild du vill som finns i src/assets/images. Hur ser bilden ut? Lägg på styling.
3. Nu ska vi lägga till en TextInput component och en Button komponent.

   - Lägg till följande props i TextInput:  
      style={styles.input}
     onChangeText={handleInputText}
     value={text}
   - Lägg till följande props i Button:
     color="#eab8b2"
     title="Spara"
     onPress={onSave}
   - För att uppdatera värden i TextInput behöver vi skapa en Hook och en method som kan heta handleInputText eller något du tycker passar.
   - För att visa texten från en TextInput använd dig av en till Text component eller befintlig, ex: `<Text>{userText}</Text>` skapa en till hook. För att texten ska visas när vi trycker på knappen Spara behöver vi en annan method onSave.
   - Om du vill lägga på lite styling på dessa nya fält kan du göra det.

4. Gå till src/screens till Button.js Här ser du några färdiga komponenter redan. Vi kommer återkomma till dem strax. Men för att se denna vy behöver vi ansluta den till vår Stack.
   - Gå därför till filen App.js. Kopiera rad 14 och klistra den under rad 14 och byt ut name och component till Buttons. Men vi kan fortfarande inte navigera oss till Buttons.
   - I Home.js lägg till därför en Button component med props title som ska vara Go to Buttons. Lägg till även onPress props med `() => navigation.navigate('Buttons')`
   - Hur ser det ut nu, kan vi förbättra utseendet?
   - Nu när du klickar på knappen borde du se att den bytar till Buttons.
5. Nu går vi tillbaka till Home. Lägg till en lång text eller lägg till fler av bilden vad händer då? Hur fixar vi det?
   - För att kunna se allt behöver vi wrappa med ScrollView komponenten.
