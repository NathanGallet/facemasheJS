/**
 * FaceController
 *
 * @description :: Server-side logic for managing faces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//TODO : check faces array


//TODO : check id
module.exports = {
    upVote: function(req, res) {
        var id_self     = req.param('id_self');
        var id_opponent = req.param('id_opponent');
        var ranking_self;
        var ranking_opponent;
        Face.find([id_self, id_opponent])
            .then((faces) => {
                ranking_self     = faces[0].rank;
                ranking_opponent = faces[1].rank;

                updateRating(ranking_self, ranking_opponent, res);
            })
    }

};

function updateRating(ranking_self, ranking_opponent, res) {

    var constant = 15;
    quote_self = Math.pow(10, ranking_self/400);
    quote_opponent = Math.pow(10, ranking_opponent/400);
    ranking_self += parseInt(qu)
    res.ok();
}