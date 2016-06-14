import _ from 'lodash';
import Models from '../models';
const Org = Models.org;
const sequelize = Models.sequelize;

/**
 * List all orgs
 */
export function all(req, res) {
  Org.findAll().then((orgs) => {
    res.json(orgs);
  }).catch((err) => {
    console.log(err);
    res.status(500).send('Error in first query');
  });
}

/**
 * Add an org
 */
export function add(req, res) {
  Org.create(req.body).then(() => {
    res.status(200).send('OK');
  }).catch((err) => {
    console.log(err);
    res.status(400).send(err);
  });
}

/**
 * Update an org
 */
export function update(req, res) {
  const query = { org_id: req.params.id };
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    Org.update(data, { where: query }).then(() => {
      res.status(200).send('Updated successfully');
    }).catch((err) => {
      console.log(err);
      res.status(500).send('We failed to save for some reason');
    });
  }
}

/**
 * Remove an org
 */
export function remove(req, res) {
  Org.destroy({ where: { org_id: req.params.id } }).then(() => {
    res.status(200).send('Removed Successfully');
  }).catch((err) => {
    console.log(err);
    res.status(500).send('We failed to delete for some reason');
  });
}

export default {
  all,
  add,
  update,
  remove
};
