//cas pratique 0

const messsageText = 'Hello Bob!'; // you should type on this line
const messageCreatedAt = new Date(); // this one too

function stringifyMessage(text: string, createdAt: Date): string {
  // this one too
  return `${text}, the ${createdAt.toLocaleDateString()}`;
}

console.log('cas pratique 0');
console.log(stringifyMessage(messsageText, messageCreatedAt));

//cas pratique 1
//crée un type Message qui correspond à ces 2 objets (il est déjà appliqué à ces 2 objets)
type Message = {
  from: string;
  message: string;
  isRead?: boolean;
};

const message1: Message = {
  from: 'Bob',
  message: 'Hello Alice!',
  isRead: true,
};
const message2: Message = { from: 'Alice', message: 'Hi Bob!' };

console.log('cas pratique 1');
console.log(message1, message2);

//cas pratique 2
// Maintenant, ajoute ces lignes pour créer un tableau de messages (type-le correctement) et une fonction qui marque “lus” tous les messages (type correctement les paramètres d’entrée et la sortie). Cette fonction doit retourner le nombre de messages.

const messages = [message1, message2]; // type this line
function readMessages(messages: Message[]): number {
  // this one too
  // put some logic to set isRead to true on all messages

  const handleReadMessages = messages.map((message) => {
    return { ...message, isRead: true };
  });

  return handleReadMessages.length;
}
const result = readMessages(messages);
console.log('cas pratique 2');
console.log(`le nombre de messages lus = ${result}`);

//cas pratique 3
// Maintenant on reprend avec des notifications en plus, crée un nouveau type Notif qui correspond à ces 2 variables

type Notif = {
  at: number;
  state: 'read' | 'unread';
};

const notification1: Notif = { at: 1694011133, state: 'unread' };
const notification2: Notif = { at: 1694011532, state: 'read' };

//cas pratique 4
// Enfin, crée cette nouvelle fonction qui permet de marquer comme “lu” un message ou une notification passée en paramètre. Cette fonction ne retourne rien. Petit indice : si tu utilises bien une union de types, tu peux ensuite utiliser une condition “si” sur une propriété discriminante entre les 2 types pour pouvoir les manipuler sans erreur, l’opérateur in t’aidera

function readNotificationOrMessage(
  notificationOrMessage: Message | Notif
): void {
  if ('state' in notificationOrMessage) {
    notificationOrMessage.state = 'read';
    console.log('notificationOrMessage', notificationOrMessage);

    return;
  }

  notificationOrMessage.isRead = true;
  console.log('notificationOrMessage', notificationOrMessage);
  // type this line
  // put some logic here to mark as read a message or a notif
  // this function does NOT return anything
}

console.log('cas pratique 4');
readNotificationOrMessage(message1);
readNotificationOrMessage(notification1);
readNotificationOrMessage(notification2);
const message3: Message = { from: 'Alice', message: 'Hi Bob!' };
readNotificationOrMessage(message3);
