#include "globalne.h++"
#include <cmath>

int odleglosc(piksel &p, piksel &q)
{
    return sqrt((p.get_x() - q.get_x()) * (p.get_x() - q.get_x())
    + (p.get_y() - q.get_y()) * (p.get_y() - q.get_y()));
}

int odleglosc(piksel *p, piksel *q)
{
    return sqrt((p->get_x() - q->get_x()) * (p->get_x() - q->get_x())
                + (p->get_y() - q->get_y()) * (p->get_y() - q->get_y()));
}
