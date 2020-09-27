// db.delete_me.insert({ item: 'some item'})
db.createUser({
  user: 'cococtnr',
  pwd: 'cocopass',
  roles: [
    { role: 'readWrite', db: 'coco' }
  ]
})
